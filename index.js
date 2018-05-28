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
            remove: 'Remover',
            add_filter: 'Añadir filtro',
            remove_filter: 'Remover este filtro',
            back: 'Ir Atrás',
            bulk_actions: '%{smart_count} seleccionados',
        },
        boolean: {
            true: 'Si',
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
                    'Arroja algunos archivos para subir, o clickea para seleccionar uno.',
                upload_single: 'Arroja un archivo para subir, o clickea para seleccionar uno.',
            },
            image: {
                upload_several:
                    'Arroja algunos imagénes para subir, o clickea para seleccionar una.',
                upload_single:
                    'Arroja algunos imagen para subir, o clickea para seleccionar una.',
            },
            references: {
                all_missing: 'No se pueden encontrar datos de referencias.',
                many_missing:
                    'Al menos una de las referencias asociadas ya no parece estar disponible.',
                single_missing:
                    'La referencia asociada ya no parece estar disponible.',
            },
        },
        message: {
            yes: 'Si',
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
                '¿Seguro que quieres eliminar este %{name}? |||| ¿Seguro que quieres eliminar estos %{smart_count} articulos?',
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
            http_error: 'Error de comunicación del servidor',
            canceled: 'Acción cancelada',
        },
        validation: {
            required: 'Requerido',
            minLength: 'Debe contener %{min} caracteres al menos',
            maxLength: 'Debe contener %{max} caracteres o menos',
            minValue: 'Debe ser al menos %{min}',
            maxValue: 'Debe ser %{max} o menos',
            number: 'Debe que ser un número',
            email: 'Debe ser un correo electrónico válido',
            oneOf: 'Debe ser uno de: %{options}',
            regex: 'Debe coincidir con un formato específico (regexp): %{pattern}',
        },
    },
};
