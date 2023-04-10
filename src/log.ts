import thena from "thena/node";

export const log = (...messages: any[]) => {
    console.log(thena.color("filio", "blue", "bold"), ...messages);
};

export const error = (...messages: any[]) => {
    console.error(thena.color("filio", "red", "bold"), ...messages);
};

export const warn = (...messages: any[]) => {
    console.warn(thena.color("filio", "yellow", "bold"), ...messages);
};

export const success = (...messages: any[]) => {
    console.log(thena.color("filio", "green", "bold"), ...messages);
};
