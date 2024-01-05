export function getBasePath() {
    const currentPath = window.location.pathname;
    return currentPath.endsWith('/') ? `../` : `../`;
}   