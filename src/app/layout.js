import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  // Basic metadata
  title: {
    default: 'Muhammad Faizan - Full Stack Developer',
    template: '%s | Muhammad Faizan Portfolio'
  },
  description: 'Experienced MERN Stack Developer specializing in React.js, Node.js, MongoDB, and Express.js. View my portfolio for web development projects and professional experience.',
  keywords: [
    'MERN Stack Developer',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'JavaScript Developer',
    'Muhammad Faizan',
    'Portfolio'
  ],
  
  // Open Graph metadata
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-vbm6.vercel.app/',
    site_name: 'Muhammad Faizan Portfolio',
    title: 'Muhammad Faizan - Full Stack Developer',
    description: 'Professional portfolio showcasing web development projects and expertise in MERN stack development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Muhammad Faizan - Portfolio Preview'
      }
    ]
  },



  // Additional SEO metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification metadata
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code'
  },
  
  // Additional metadata
  authors: [{ name: 'Muhammad Faizan' }],
  creator: 'Muhammad Faizan',
  publisher: 'Muhammad Faizan',
  category: 'Technology',
  
  // Alternative languages
  alternates: {
    canonical: 'https://github.com/Muhammadfaizanjanjua109',
    languages: {
      'en-US': 'https://github.com/Muhammadfaizanjanjua109/en-US',
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      
        
      {/* Structured data for better SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Muhammad Faizan",
            "url": "https://github.com/Muhammadfaizanjanjua109",
            "jobTitle": "Full Stack Developer",
            "knowsAbout": ["MERN Stack", "Web Development", "JavaScript", "React.js", "Node.js"],
            "sameAs": [
              "https://github.com/Muhammadfaizanjanjua109",
              "https://www.linkedin.com/in/follow-muhammadfaizan/",
              "https://twitter.com/your-twitter"
            ]
          })
        }}
      />
    </head>
    <body>
      {/* Main content wrapper */}
      <main id="main-content">
        {children}
      </main>

      {/* Footer with additional SEO content */}
      <footer className="hidden">
        <address itemScope itemType="http://schema.org/Person">
          <span itemProp="name">Muhammad Faizan</span>
          <span itemProp="jobTitle">Full Stack Developer</span>
          <span itemProp="email">muhammadfaizanjanjua109@gmail.com</span>
        </address>
      </footer>
    </body>
    </html>
  );
}
