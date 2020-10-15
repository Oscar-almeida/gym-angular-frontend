import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'administracion',
        title: 'Administracion',
        type: 'group',
        children: [
            {
                id: 'historial-asistencia',
                title: 'Historial de asistencia',
                type: 'item',
                icon: 'list',
                url: '/app/historial-asistencia'
            },
            {
                id: 'aprendices',
                title: 'Aprendices',
                type: 'item',
                icon: 'account_box',
                url: '/app/aprendices'
            },
            {
                id: 'inventario',
                title: 'Inventario',
                type: 'item',
                icon: 'motorcycle',
                url: '/app/inventario'
            },
            {
                id: 'ejercicios',
                title: 'Ejercicios',
                type: 'item',
                icon: 'accessibility_new',
                url: '/app/ejercicios'
            },
            {
                id: 'musculos',
                title: 'Musculos',
                type: 'item',
                icon: 'favorite',
                url: '/app/musculos'
            }
        ]
    },
    {
        id: 'aplicaciones',
        title: 'Aplicaciones',
        type: 'group',
        children: [
            {
                id: 'calendario-eventos',
                title: 'Calendario de eventos',
                type: 'item',
                icon: 'calendar_today',
                url: '/eventos/calendario'
            }
        ]
    },
    {
        id: 'documentacion',
        title: 'Ayuda',
        type: 'group',
        children: [

        ]
    }
];
