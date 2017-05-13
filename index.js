module.exports = {
    aor: {
        action: {
            delete: 'Eliminar',
            show: 'Mostrar',
            list: 'Listar',
            save: 'Guardar',
            cancel: 'Cancelar',
            create: 'Crear',
            edit: 'Editar',
            refresh: 'Actualizar',
            add_filter: 'Añadir filtro',
            remove_filter: 'Eliminar filtro',
        },
        boolean: {
            true: 'Sí',
            false: 'No',
        },
        page: {
            list: 'Listar %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Crear %{name}',
            delete: 'Eliminar %{name} #%{id}',
            dashboard: 'Panel de control'
        },
        input: {
            image: {
                upload_several: 'Suelte algunos archivos para cargar o haga clic para seleccionar uno.',
                upload_single: 'Suelte un archivo para cargarlo o haga clic para seleccionarlo.',
            },
        },
        message: {
            yes: 'Sí',
            no: 'No',
            are_you_sure: '¿Estás seguro?',
            about: 'Acerca de',
        },
        navigation: {
            no_results: 'No se encontraron resultados',
            page_out_of_boundaries: 'La página %{page} está fuera del limite',
            page_out_from_end: 'No se puede ir después de la última página',
            page_out_from_begin: 'No se puede ir antes de la página 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            next: 'Siguiente',
            prev: 'Anterior',
        },
        auth: {
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Ingresar',
            sign_in_error: 'Se ha producido un error en la autenticación.',
            logout: 'Cerrar sesión',
        },
        notification: {
            updated: 'Elemento actualizado',
            created: 'Elemento creado',
            deleted: 'Elemento eliminado',
            item_doesnt_exist: 'El elemento no existe',
        },
        validation: {
            required: 'Requerido',
        },
    },
};
