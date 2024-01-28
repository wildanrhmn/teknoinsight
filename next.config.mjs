/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: () => [
        {
            source: '/',
            destination: '/home',
            permanent: false
        }
    ]
};

export default nextConfig;
