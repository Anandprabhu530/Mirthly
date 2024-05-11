/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [{ source: "/login", destination: "/", permanent: false }];
  },
};

export default nextConfig;
