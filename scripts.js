const images = document.querySelector('.carousel-images');
const imageCount = images.children.length;
let currentIndex = 0;

function updateCarousel() {
    images.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    updateCarousel();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageCount;
    updateCarousel();
});

function showDetailedText(imageIndex) {
    const detailedText = document.getElementById('detailed-text');
    let content = '';

    switch (imageIndex) {
        case 1:
            content = `
                <h2>Caneta Azul - Letra</h2>
                <p>Os leucócitos, também conhecidos como glóbulos brancos, são as células responsáveis por defender o organismo contra infecções, doenças, alergias e resfriados, sendo parte da imunidade de cada pessoa. Essas células são transportadas no sangue para serem utilizadas sempre que um vírus, uma bactéria, ou qualquer outro organismo estranho entra no corpo humano, eliminando-os e impedindo que provoquem problemas de saúde </p>
                <iframe src="https://www.youtube.com/embed/2P_esm8cNgU" title="YouTube video player" allowfullscreen></iframe>
            `;
            break;
        case 2:
            content = `
                <h2>Olha, Se Você Não Me Ama</h2>
                <p>Os leucócitos, também conhecidos como glóbulos brancos, são as células responsáveis por defender o organismo contra infecções, doenças, alergias e resfriados, sendo parte da imunidade de cada pessoa. Essas células são transportadas no sangue para serem utilizadas sempre que um vírus, uma bactéria, ou qualquer outro organismo estranho entra no corpo humano, eliminando-os e impedindo que provoquem problemas de saúde</p>
                <iframe src="https://www.youtube.com/embed/F09qaP7eEWc" title="YouTube video player" allowfullscreen></iframe>
            `;
            break;
        case 3:
            content = `
                <h2>Parabéns</h2>
                <p>Os leucócitos, também conhecidos como glóbulos brancos, são as células responsáveis por defender o organismo contra infecções, doenças, alergias e resfriados, sendo parte da imunidade de cada pessoa. Essas células são transportadas no sangue para serem utilizadas sempre que um vírus, uma bactéria, ou qualquer outro organismo estranho entra no corpo humano, eliminando-os e impedindo que provoquem problemas de saúde</p>
                <h2>Resumo da Função dos Leucócitos</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Tipo</th>
                                    <th>Função Principal</th>
                                    <th>Exemplos de Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Neutrófilos</td>
                                    <td>Fagocitose de bactérias e fungos</td>
                                    <td>Combate inicial em infecções bacterianas</td>
                                </tr>
                                <tr>
                                    <td>Linfócitos T</td>
                                    <td>Destruição de células infectadas</td>
                                    <td>Ativação de outras células imunológicas</td>
                                </tr>
                                <tr>
                                    <td>Linfócitos B</td>
                                    <td>Produção de anticorpos</td>
                                    <td>Defesa contra vírus e bactérias</td>
                                </tr>
                                <tr>
                                    <td>Células NK</td>
                                    <td>Eliminação de células tumorais</td>
                                    <td>Controle de infecções virais</td>
                                </tr>
                                <tr>
                                    <td>Monócitos</td>
                                    <td>Fagocitose e apresentação de antígenos</td>
                                    <td>Defesa em infecções crônicas</td>
                                </tr>
                                <tr>
                                    <td>Eosinófilos</td>
                                    <td>Combate a parasitas e alergias</td>
                                    <td>Resposta contra vermes e helmintos</td>
                                </tr>
                                <tr>
                                    <td>Basófilos</td>
                                    <td>Mediação de alergias</td>
                                    <td>Liberação de histamina e inflamação</td>
                                </tr>
                            </tbody>
                        </table>
                
                
                <iframe src="https://www.youtube.com/embed/ZRFT2lWBJJg" title="YouTube video player" allowfullscreen></iframe>
            `;
            break;
    }

    detailedText.innerHTML = content;
    detailedText.style.display = 'block';
}
