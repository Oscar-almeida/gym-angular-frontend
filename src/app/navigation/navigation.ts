import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id: 'aplicaciones',
        title: 'Aplicaciones',
        type: 'group',
        children: [
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
            },
            {
                id: 'sample',
                title: 'Sample',
                translate: 'NAV.SAMPLE.TITLE',
                type: 'item',
                icon: 'email',
                url: '/sample',
                badge: {
                    title: '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg: '#F44336',
                    fg: '#FFFFFF'
                }
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
