import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    organization: process.env.NEXT_PUBLIC_ORGANIZATION,
    apiKey: process.env.NEXT_PUBLIC_API_KEY
});

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const openai = new OpenAIApi(configuration);

        try {
            const { messages, type } = req.body;

            let instruction = '';

            switch (type) {
                case 1:
                    instruction = 'Crea una clase divertida a partir de mis apuntes de clase. Que sea en máximo 200 palabras';
                    break;
                case 2:
                    instruction = 'Hazme preguntas de examen sobre mis apuntes de clase y respondelas. Que sea en máximo 200 palabras';
                    break;
                case 3:
                    instruction = 'Dime algo interesante sobre el siguiente texto en solo tres palabras';
                    break;
                default:
                    break;
            }

            console.log('messages', messages);
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'system', content: instruction },
                ...messages
                ]
            });
            res.json({
                completion: completion.data.choices[0].message?.content
            });
            //res.status(200).json({ message: 'Oki' });
        } catch (error) {
            console.log('Error: ', error.message);
            res.status(500).json({ message: 'Error' });
        }
    } else {
        res.status(500).json({ message: 'Unauthorized' });
    }
}