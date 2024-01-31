export type Post = {
    id: number
    title: string
    created_at: string
    updated_at: string
    id_category: string
    category: {
        slug: string
    }
    id_author: string
    author: {
        name: string
    }
    body: string
    type: string
    image?: string
}

export type PopularList = {
    id: number
    title: string
    id_author: string
    created_at: string
    author: {
        name: string
    }
    image?: string
    type: string
}

export type Category = {
    id: number
    slug: string
    name: string
    type: string
}

export type SidebarData = {
    categories: Category[]
    posts: Post[]
}

export type NavSubLinks = {
    name: string
    href: string
}