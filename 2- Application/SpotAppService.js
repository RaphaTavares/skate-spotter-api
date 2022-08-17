import prisma from '../4- Infrastructure/bd.js';

const SpotAppService = {
    async getAll() {
        const spots = await prisma.spot.findMany();
        if(!spots) throw new Error("Spots not found");

        return spots;
        },

    async getById(id){
        const spot = await prisma.spot.findFirst({where: {id : parseInt(id)}});

        return spot;
    },

    async createSpot(spot){
        spot.created_at = new Date();
        spot.updated_at = new Date();
        const createdSpot = await prisma.spot.create({data: spot});

        return createdSpot;
    }
};

export default SpotAppService;