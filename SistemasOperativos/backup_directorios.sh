
set -euo pipefail

# ------------------------------- CONFIGURACIÓN --------------------------------
# Carpetas que se van a respaldar. Agrega o quita rutas según necesites.
ORIGENES=(
    "$HOME/Documentos"
    "$HOME/Imagenes"
    "$HOME/Proyectos"
)

# Carpeta donde se guardarán los respaldos.
DESTINO="$HOME/backups"

# Archivo de log donde queda registrada cada operación.
LOG="$DESTINO/backup.log"

# Días de retención: los respaldos más viejos que este número se eliminan.
RETENCION_DIAS=7
# ------------------------------------------------------------------------------

# Marca de tiempo con formato  AAAA-MM-DD_HH-MM-SS  (ej. 2026-11-19_14-30-05)
FECHA=$(date +%Y-%m-%d_%H-%M-%S)

# Función que imprime en pantalla Y escribe en el log al mismo tiempo (tee).
registrar() {
    local mensaje="$1"
    echo "[$(date '+%Y-%m-%d %H:%M:%S')] $mensaje" | tee -a "$LOG"
}

# Crear la carpeta de destino si todavía no existe.
mkdir -p "$DESTINO"

registrar "=========================================="
registrar "   Inicio del proceso de backup"
registrar "=========================================="

# --- Solo para la demostración en video -------------------------------------
# Si las carpetas de origen no existen, se crean con un archivo de ejemplo
# para que la ejecución siempre muestre algo. En un uso real se puede borrar
# este bloque, porque las carpetas ya existirían.
for carpeta in "${ORIGENES[@]}"; do
    if [ ! -d "$carpeta" ]; then
        mkdir -p "$carpeta"
        echo "Archivo de ejemplo generado el $FECHA" > "$carpeta/ejemplo.txt"
        registrar "Carpeta de ejemplo creada: $carpeta"
    fi
done
# ----------------------------------------------------------------------------

# Recorrer cada carpeta de origen y respaldarla.
for carpeta in "${ORIGENES[@]}"; do
    if [ -d "$carpeta" ]; then
        nombre=$(basename "$carpeta")
        archivo="$DESTINO/${nombre}_${FECHA}.tar.gz"

        # tar  -c crear, -z comprimir con gzip, -f archivo de salida.
        # -C entra a la carpeta padre para guardar rutas relativas (buena práctica).
        if tar -czf "$archivo" -C "$(dirname "$carpeta")" "$nombre" 2>>"$LOG"; then
            tam=$(du -h "$archivo" | cut -f1)
            registrar "OK    -> $archivo  ($tam)"
        else
            registrar "ERROR -> no se pudo respaldar $carpeta"
        fi
    else
        registrar "AVISO -> la carpeta $carpeta no existe, se omite"
    fi
done

# --- Política de retención --------------------------------------------------
# Buscar respaldos .tar.gz con más de RETENCION_DIAS días y eliminarlos.
registrar "Aplicando retención: se eliminan respaldos de más de $RETENCION_DIAS días"
encontrados=0
while IFS= read -r viejo; do
    rm -f "$viejo"
    registrar "Eliminado por antigüedad: $viejo"
    encontrados=$((encontrados + 1))
done < <(find "$DESTINO" -name "*.tar.gz" -type f -mtime +"$RETENCION_DIAS")
if [ "$encontrados" -eq 0 ]; then
    registrar "No había respaldos antiguos para eliminar"
fi
# ----------------------------------------------------------------------------

registrar "=========================================="
registrar "   Proceso de backup finalizado"
registrar "=========================================="

echo
echo "  Respaldos guardados en : $DESTINO"
echo "  Log de operaciones     : $LOG"
echo
