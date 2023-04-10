export const recursiveMerge = (extendee: any, ...extenders: ({ [x: string]: any } | any[])[]) => {
    if (typeof extendee !== "object" || !extendee) return extenders[extenders.length - 1];

    if (Array.isArray(extendee)) {
        for (const extender of extenders) {
            if (Array.isArray(extender)) {
                extendee.push(...extender);
            } else {
                extendee.push(extender);
            }
        }

        return extendee;
    }

    for (let i = 0; i < extenders.length; i++) {
        for (const key in extenders[i]) {
            if (extenders[i].hasOwnProperty(key)) {
                if (typeof extendee[key] === "object" && typeof extenders[i][key] === "object") {
                    recursiveMerge(extendee[key], extenders[i][key]);
                } else if (typeof extenders[i][key] === "object") {
                    extendee[key] = {};
                    recursiveMerge(extendee[key], extenders[i][key]);
                } else {
                    extendee[key] = extenders[i][key];
                }
            }
        }
    }

    return extendee;
};
