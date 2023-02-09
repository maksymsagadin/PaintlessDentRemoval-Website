import { useQuery, gql } from '@apollo/client';

const getData = gql`
query Data {
    heroSection(where: {active: true}) {
      heading
      greeting
      heroImage {
        url
      }
      logo {
        url
      }
      contactImage {
        url
      }
      phone
      located
    }
    aboutSection(where: {active: true}) {
      sideImage {
        url
      }
      heading
      description
      bottomLine {
        ... on BottomLine {
          number
          description
        }
      }
    }
    servicesSection(where: {active: true}) {
      heading
      description
      services {
        ... on Service {
          id
          heading
          description
          shortSummary
          sideImage {
            url
          }
          buttonText
          logo {
            url
          }
          textColor
          backgroundColor
          row
        }
      }
    }
    gallerySection(where: {active: true}) {
      headline
      galleryImages {
        ... on GalleryImage {
          id
          image {
            url
          }
          size
          description
        }
      }
    }
  }
`
export const useSiteData = props => {
    const { error, data, loading } = useQuery(getData)
    return {error, data, loading}
}