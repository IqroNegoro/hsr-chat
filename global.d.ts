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
        type: "image" | "text"
    }

    interface Chat {
        [key: string]: Message[]
    }
}

export {}