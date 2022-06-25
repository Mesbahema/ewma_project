export function toTitleCase(str: string) {
    try {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
    } catch {
        return ''
    }
}

export function toPriceFormat(price?: number) {
    try {
        return price?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        });
    } catch {
        const zero = 0
        return zero.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
        })
    }
}

