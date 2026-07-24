import type {MetadataRoute} from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Huang Shan Global',
        short_name: 'HSG',
        description: 'Huang Shan Global',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#284832',
        icons: [
            {
                src: '/logo/logo-wb.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}