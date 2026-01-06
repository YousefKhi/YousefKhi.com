export interface ProjectMedia {
  type: 'image' | 'video'
  src: string
  caption?: string
}

export interface ProjectSection {
  title: string
  description: string
  media: {
    type: 'image' | 'video'
    src: string
  }
}

export interface Project {
  id: string
  slug: string
  title: string
  tagline: string
  description: string
  heroMedia: {
    type: 'image' | 'video'
    src: string
  }
  sections: ProjectSection[]
  technologies: string[]
  folder: string
  preview: string
  link?: string
  github?: string
  year: string
  role: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'learnitfastr',
    title: 'LearnItFastr',
    tagline: 'AI-powered learning platform for accelerated studying',
    description: 'My first real attempt at building a SaaS product. I was fascinated by the idea of creating something people could actually use, so I dove in and figured things out as I went. This project taught me how to integrate the OpenAI API and set up user authentication and token management with Supabase.',
    heroMedia: {
      type: 'video',
      src: 'DemoVideo.mp4',
    },
    sections: [
      {
        title: 'What It Does',
        description: 'Students can create their own learning spaces, upload study materials like PDFs and notes, and let the AI generate quizzes and flashcards from their content. There is also a focus timer and progress tracking to help stay on top of things.',
        media: {
          type: 'image',
          src: 'Screenshot 2026-01-05 212305.png',
        },
      },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Supabase'],
    folder: 'LearnItFastr',
    preview: 'Preview.png',
    link: 'https://learnitfastr.com',
    year: '2026',
    role: '',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}

