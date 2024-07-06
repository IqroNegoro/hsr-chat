declare global {
    interface Character {
        id: string,
        name: string,
        tag: string,
        icon: string
    }

    interface Message {
        id: number,
        text: string,
        isTrailblazer: boolean,
        type: "text" | "image"
    }

    interface Chat {
        [key: string]: Message[]
    }
}

export {}