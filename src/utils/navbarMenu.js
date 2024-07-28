export const menuOpen = (delay) => {
    return {
        hidden: {x: 0, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5
            }
        }
    }
}

export const menuClose = (delay) => {
    return {
        hidden: {x: 0, opacity: 0},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5
            }
        }
    }
}