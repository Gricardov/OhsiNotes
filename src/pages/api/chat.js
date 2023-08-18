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
                    res.json({
                        completion: `¡Claro! Vamos a crear una clase divertida basada en tus apuntes sobre cómo nace la filosofía y la naturaleza de las preguntas filosóficas. Aquí tienes una idea para la estructura de la clase:

                        **Título: Aventura Filosófica: Descubriendo el Mundo de las Preguntas Profundas**
                        
                        **Duración:** 1 hora
                        
                        **Objetivo de la Clase:** Explorar cómo nace la filosofía y entender la diversidad de preguntas filosóficas que nos desafían a pensar más allá de lo ordinario.
                        
                        **Actividades:**
                        
                        1. **Introducción a la Filosofía (10 minutos)**
                           - Comenzaremos con una breve charla sobre la historia de la filosofía y cómo nace a partir del amor por la sabiduría.
                           - Mencionaremos a algunos filósofos famosos como Sócrates, Nietzsche y Kant para establecer el contexto.
                        
                        2. **Desafío de Preguntas Filosóficas (15 minutos)**
                           - Dividiremos a los estudiantes en grupos y les proporcionaremos preguntas filosóficas para debatir y analizar.
                           - Preguntas ejemplos:
                             - "¿Qué es la belleza y por qué tiene diferentes significados para diferentes personas?"
                             - "Si una mariposa y una polilla son muy similares, ¿por qué tendemos a considerar a una más bella que la otra?"
                             - "¿Qué hace que una persona sea 'racional' y cómo se relaciona con los derechos?"
                           
                        3. **Explorando las Dimensiones Filosóficas (20 minutos)**
                           - Presentaremos el concepto de preguntas empíricas y formales utilizando ejemplos prácticos.
                           - Analizaremos la diferencia entre preguntas subjetivas y objetivas utilizando el ejemplo de la percepción de la belleza.
                           - Mostraremos cómo el filósofo profundiza en las preguntas para desafiar las respuestas superficiales y cuestionar lo tradicional.
                        
                        4. **Aventura Filosófica en Grupo (10 minutos)**
                           - Guiaremos a los estudiantes a través de un juego de roles donde interpretarán a filósofos famosos como Sócrates, Nietzsche, Kant, y crearán diálogos imaginarios sobre preguntas filosóficas.
                        
                        5. **Reflexión y Debate (15 minutos)**
                           - Animaremos a los estudiantes a compartir sus experiencias en el juego de roles y debatir sobre las respuestas y perspectivas filosóficas.
                           - Fomentaremos la discusión sobre la utilidad de la filosofía en la vida cotidiana y en otras áreas del conocimiento.
                        
                        6. **Cierre y Conclusión (5 minutos)**
                           - Revisaremos los puntos clave de la clase y enfatizaremos la importancia de hacer preguntas profundas y desafiantes en nuestras vidas.
                        
                        **Materiales:**
                        - Tarjetas con preguntas filosóficas para el desafío en grupos.
                        - Tarjetas de personajes para el juego de roles.
                        - Proyector y pantalla para mostrar ejemplos visuales y citas de filósofos.
                        
                        ¡Espero que esta propuesta te haya gustado! Esta clase permitirá a los estudiantes sumergirse en el mundo de la filosofía de manera divertida y participativa, alentándolos a cuestionar, reflexionar y pensar más allá de lo evidente.`
                    });
                    break;
                case 2:
                    instruction = 'Hazme preguntas de examen sobre mis apuntes de clase y respondelas. Que sea en máximo 200 palabras';
                    res.json({
                        completion: `¡Por supuesto! Aquí tienes algunas preguntas de examen basadas en los apuntes de clase, junto con sus respuestas correspondientes:

                        Pregunta 1: ¿Cuál es el origen etimológico de la palabra "filosofía" y qué significados implica?
                        
                        Respuesta 1: El término "filosofía" proviene de dos palabras griegas: "filia" que significa "amor" o "afecto", y "sofía" que significa "sabiduría". Por lo tanto, "filosofía" implica el amor por la sabiduría y la búsqueda de conocimiento profundo y reflexivo.
                        
                        Pregunta 2: ¿Cuál es la diferencia entre preguntas empíricas y preguntas formales en filosofía?
                        
                        Respuesta 2: Las preguntas empíricas se basan en la experiencia personal, la observación del entorno o en la investigación científica. Estas preguntas pueden responderse mediante la observación y el análisis. Por otro lado, las preguntas formales son abstractas y a menudo se relacionan con la lógica y la matemática. Estas preguntas no se basan en la experiencia directa, sino en la estructura y las reglas lógicas.
                        
                        Pregunta 3: Según Sócrates, "Una vida sin examen no merece la pena ser vivida". ¿Qué significa esta cita y cómo se relaciona con la filosofía?
                        
                        Respuesta 3: Esta cita de Sócrates sugiere que la reflexión y el cuestionamiento son esenciales para una vida significativa. La filosofía invita a examinar nuestras creencias y suposiciones, lo que nos permite comprender mejor el mundo y nuestras propias acciones. Cuestionar lo tradicional y explorar nuevas perspectivas es fundamental en la filosofía.
                        
                        Pregunta 4: Explica la diferencia entre una pregunta subjetiva y una pregunta objetiva en el contexto filosófico.
                        
                        Respuesta 4: Una pregunta subjetiva se refiere a cuestiones que dependen de la opinión personal y la percepción individual. Por ejemplo, "¿Qué te parece la belleza de esta pintura?" es una pregunta subjetiva. En contraste, una pregunta objetiva se puede responder mediante hechos y evidencia concretos. Por ejemplo, "¿Cuál es la fórmula matemática para calcular el área de un triángulo?" es una pregunta objetiva.
                        
                        Pregunta 5: ¿Por qué es importante cuestionar y problematizar en la filosofía?
                        
                        Respuesta 5: Cuestionar y problematizar son fundamentales en la filosofía porque ayudan a explorar las bases, los orígenes y las implicaciones de las ideas y creencias. Al cuestionar lo establecido, se puede llegar a una comprensión más profunda de los conceptos y encontrar nuevas perspectivas que pueden llevar a un pensamiento más crítico y creativo.
                        
                        Pregunta 6: ¿Cómo se relaciona la filosofía con otras áreas del conocimiento?
                        
                        Respuesta 6: La filosofía actúa como una herramienta crítica y analítica que puede aplicarse a diversas disciplinas. Funciona como una base para el pensamiento lógico y creativo en áreas como la ciencia, la ética, el derecho y la política. Además, la filosofía puede ayudar a generar nuevas perspectivas y enfoques en la resolución de problemas en otras disciplinas.
                        
                        Espero que estas preguntas y respuestas te ayuden a repasar y comprender mejor los conceptos presentados en tus apuntes de clase. ¡Si tienes más preguntas o necesitas más aclaraciones, no dudes en preguntar!`
                    });
                    break;
                case 3:
                    instruction = 'Dime algo interesante sobre el siguiente texto en solo tres palabras';
                    res.json({
                        completion: 'TEST'
                    });
                    break;
                default:
                    break;
            }

            /*console.log('messages', messages);
            const completion = await openai.createChatCompletion({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'system', content: instruction },
                ...messages
                ]
            });
            res.json({
                completion: completion.data.choices[0].message?.content
            });*/
            //res.status(200).json({ message: 'Oki' });
        } catch (error) {
            console.log('Error: ', error.message);
            res.status(500).json({ message: 'Error' });
        }
    } else {
        res.status(500).json({ message: 'Unauthorized' });
    }
}