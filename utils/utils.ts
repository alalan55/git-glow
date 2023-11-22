export const getPageFromLinkHeader = (linkHeader: any, rel: any) => {
    if (!linkHeader) return null;
  
    const links = linkHeader.split(", ");
    const targetLink = links.find((link: any) => link.includes(rel));
  
    if (targetLink) {
      const url = targetLink.match(/<(.+?)>/);
      return url ? url[1] : null;
    }
  
    return null;
  }