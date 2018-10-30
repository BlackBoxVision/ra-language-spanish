module.exports = {
    ra: {
        action: {
            delete: 'Eliminar',
            show: 'Mostrar',
            list: 'Listar',
            save: 'Guardar',
            create: 'Crear',
            edit: 'Editar',
            sort: 'Ordenar',
            cancel: 'Cancelar',
            undo: 'Deshacer',
            refresh: 'Refrescar',
            add: 'Añadir',
            remove: 'Borrar',
            add_filter: 'Añadir filtro',
            remove_filter: 'Borrar filtro',
            back: 'Ir atrás',
            bulk_actions: '%{smart_count} seleccionados',
        },
        boolean: {
            true: 'Sí',
            false: 'No',
        },
        page: {
            list: '%{name} Lista',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Crear %{name}',
            dashboard: 'Dashboard',
            not_found: 'No encontrado',
            loading: 'Cargando',
        },
        input: {
            file: {
                upload_several:
                    'Arrastra algunos archivos para subir o haz clic para seleccionarlos.',
                upload_single: 'Arrastra un archivo para subir o haz clic para seleccionarlo.',
            },
            image: {
                upload_several:
                    'Arrastra algunas imagénes para subir o haz clic para seleccionarlas.',
                upload_single:
                    'Arrastra alguna imagen para subir o haz clic para seleccionarla.',
            },
            references: {
                all_missing: 'No se pueden encontrar datos de referencias.',
                many_missing:
                    'Al menos una de las referencias asociadas parece no estar disponible.',
                single_missing:
                    'La referencia asociada no parece estar disponible.',
            },
        },
        message: {
            yes: 'Sí',
            no: 'No',
            are_you_sure: '¿Estás seguro?',
            about: 'Acerca de',
            not_found:
                'O bien escribió una URL incorrecta o siguió un enlace incorrecto.',
            loading: 'La página se está cargando, espere un momento por favor',
            invalid_form: 'El formulario no es válido. Por favor verifique si hay errores',
            delete_title: 'Eliminar %{name} #%{id}',
            delete_content: '¿Seguro que quieres eliminar este artículo?',
            bulk_delete_title:
                'Eliminar %{name} |||| Eliminar %{smart_count} %{name} articulos',
            bulk_delete_content:
                '¿Seguro que quieres eliminar este %{name}? |||| ¿Seguro que quieres eliminar estos %{smart_count} artículos?',
        },
        navigation: {
            no_results: 'No se han encontrado resultados',
            no_more_results:
                'El número de página %{page} está fuera de los límites. Prueba la página anterior.',
            page_out_of_boundaries: 'Número de página %{page} fuera de los límites',
            page_out_from_end: 'No puede ir después de la última página',
            page_out_from_begin: 'No puede ir antes de la página 1',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            next: 'Siguiente',
            prev: 'Anterior',
        },
        auth: {
            username: 'Usuario',
            password: 'Contraseña',
            sign_in: 'Registrarse',
            sign_in_error: 'La autenticación falló, por favor, vuelva a intentarlo',
            logout: 'Cerrar Sesión',
        },
        notification: {
            updated: 'Elemento actualizado |||| %{smart_count} elementos actualizados',
            created: 'Elemento creado',
            deleted: 'Elemento borrado |||| %{smart_count} elementos borrados.',
            bad_item: 'El elemento es incorrecto',
            item_doesnt_exist: 'El elemento no existe',
            http_error: 'Error de comunicación con el servidor',
            canceled: 'Acción cancelada',
        },
        validation: {
            required: 'Requerido',
            minLength: 'Debe contener %{min} caracteres al menos',
            maxLength: 'Debe contener %{max} caracteres o menos',
            minValue: 'Debe ser al menos %{min}',
            maxValue: 'Debe ser %{max} o menos',
            number: 'Debe ser un número',
            email: 'Debe ser un correo electrónico válido',
            oneOf: 'Debe ser uno de: %{options}',
            regex: 'Debe coincidir con un formato específico (regexp): %{pattern}',
        },
    },
};
