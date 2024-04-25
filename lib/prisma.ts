import { PrismaClient } from '@prisma/client';

declare global {
    var db: PrismaClient;
}

let db: PrismaClient;

if (process.env.NODE_ENV === 'development') {
    db = new PrismaClient();
} else {
    if (!global.db) {
        global.db = new PrismaClient();
    }
    db = global.db;
}

export default db;