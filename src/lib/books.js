import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = '096e0d5d9c8e5df79962ae5fbd4b4d';
        const client = new SiteClient(TOKEN);

        const registroCriado = await client.items.create({
            itemType: "990210",
            ...request.body,
            //title: "",
            //imageUrl: "",
            //creatorSlug: "",
        })

        response.json({
            dados: 'Algum dado',
            registroCriado: registroCriado,
        })
        return;
    }
}