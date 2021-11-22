import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
    if (request.method === 'POST') {
        const TOKEN = 'aa46008d60bb2aeeecbd5ef2d4d140';
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