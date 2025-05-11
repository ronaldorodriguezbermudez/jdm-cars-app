FROM mysql:latest

# Copiar el script de inicialización al directorio de inicialización de MySQL
COPY init.sql /docker-entrypoint-initdb.d/

EXPOSE 3306