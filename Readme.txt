Crear una nueva rama:

1. git checkout -b nombre-de-la-nueva-rama
2. git push origin nombre-de-la-nueva-rama
3. git push --set-upstream origin nombre-de-la-nueva-rama

Subir un cambio:

1. git add .
2. git commit -m "feat new change"

Pasos de un flujo de trabajo de git:

1. Primero clona el repositorio remoto. 
2. A continuación, crea una rama desde el repositorio principal para trabajar en ella. 
3. Añade archivos actualizados al área de ensayo y comprométete con la rama.
4. Envía las confirmaciones al repositorio remoto. 
5. Crea una solicitud de cambios para fusionar la rama con la rama principal, que el responsable del mantenimiento revisará y aprobará. 
6. Cuando comiences un proyecto nuevo, inicializa un repositorio git local. 
7. A continuación, selecciona los archivos de los que quieres que Git realice un seguimiento, muévelos a un área de ensayo y realiza una confirmación inicial. 
8. Crea un repositorio remoto en blanco y establece un enlace con tu repositorio local. 
9. Introduce los cambios para que otros desarrolladores puedan clonar este repositorio remoto y seguir el flujo de trabajo habitual para actualizar los archivos del proyecto.