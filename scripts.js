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
                <h2>Leucócito</h2>
                 <p>Os leucócitos, também conhecidos como glóbulos brancos, são as células responsáveis por defender o organismo contra infecções, doenças, alergias e resfriados, sendo parte da imunidade de cada pessoa. Essas células são transportadas no sangue para serem utilizadas sempre que um vírus, uma bactéria, ou qualquer outro organismo estranho entra no corpo humano, eliminando-os e impedindo que provoquem problemas de saúde </p>
                 
                <h2>Tipos de Leucócitos</h2> 
                 
                  <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/08/leucocitos.jpg" alt="" srcset="">
                 <h2>Neutrófilos</h2> 
                    <p>Os Neutrófilos são os glóbulos brancos mais comuns no sistema imunológico do ser humano, ocorrendo em cerca de 60-70% dos leucócitos circulantes. Ele é responsável por nos proteger das ameaças fúngicas e bacterianas, e nesse processo gerando pus. Se olharmos para seu núcleo perceberemos que seu núcleo é dividido em três a cinco partes e por isso é chamado de polimorfonucleares.</p> 


                    <h2>Eosinófilos</h2> 
                    <p>Os eosinófilos estão presentes em cerca de 2-3% dos leucócitos circulantes no sistema imunológico. Ele é responsável por nos proteger das ameaças parasitárias. Eles também são responsáveis pelas respostas alérgicas do corpo. Eles não são tão presentes no sangue, mas são  bastante presentes no trato intestinal, no trato respiratório e no sistema urinário. Sua forma de defesa é secretando uma substância química que destrói os grandes parasitas.  Seu núcleo é formado por dois lobos e ligado por uma fina fita. E por isso ele é chamado de bi-lobado.</p> 

                    <h2>Basófilos</h2> 
                    <p>Basófilos são glóbulos brancos importantes para o sistema imunológico, envolvidos principalmente em reações alérgicas e inflamações. Eles liberam histamina e outros mediadores para combater alérgenos e promover a inflamação necessária para a defesa do corpo. Mesmo sendo raros, desempenham funções essenciais na resposta imunológica e na proteção contra infecções.
                    </p> 

                    <h2>Linfócitos</h2> 
                    <p>Os linfócitos são vitais para o sistema imunológico, desempenhando papéis essenciais na defesa contra infecções. Linfócitos B produzem anticorpos, enquanto os linfócitos T destroem células infectadas e ajudam a coordenar a resposta imunológica. Juntos, eles garantem que o corpo possa combater patógenos de maneira eficiente e proteger-se contra futuras infecções.</p> 


                    <h2>Monócitos</h2> 
                    <p>Monócitos são glóbulos brancos essenciais para a imunidade inata. Eles realizam fagocitose para eliminar patógenos e detritos, e podem se diferenciar em macrófagos e células dendríticas para funções imunológicas avançadas. Sua capacidade de responder rapidamente a infecções e lesões faz deles componentes vitais para a proteção do corpo.
                    </p>
                        
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
                <iframe src="https://www.youtube.com/embed/2P_esm8cNgU" title="YouTube video player" allowfullscreen></iframe>
            `;
            break;
        case 2:
            content = `
                <h2>Diabedese</h2>
                 <p>A diapedese é o processo pelo qual os leucócitos (glóbulos brancos) atravessam a parede dos vasos sanguíneos para atingir tecidos onde há uma infecção ou inflamação. Esse mecanismo é essencial para a resposta imune, permitindo que os leucócitos migrem do sangue para áreas específicas do corpo onde são necessários para combater patógenos, reparar tecidos ou eliminar células danificadas.</p>
                   <h3>Fases da Diapedese</h3>
    <ol>
        <li>
            <strong>Marginação</strong><br>
            Os leucócitos se deslocam para as margens do fluxo sanguíneo, aproximando-se da parede dos vasos.
        </li>
        <li>
            <strong>Rolagem</strong><br>
            Os leucócitos "rolam" ao longo do endotélio vascular, interagindo com moléculas de adesão seletinas expressas pelas células endoteliais ativadas.
        </li>
        <li>
            <strong>Adesão Firme</strong><br>
            Os leucócitos se fixam firmemente ao endotélio através da interação entre integrinas (nos leucócitos) e moléculas de adesão (ICAM-1 e VCAM-1) nas células endoteliais.
        </li>
        <li>
            <strong>Transmigração (Diapedese propriamente dita)</strong><br>
            Os leucócitos atravessam o endotélio e a membrana basal, movendo-se para o espaço intersticial. Isso pode ocorrer:
            <ul>
                <li><strong>Entre as células endoteliais</strong> (via paracelular).</li>
                <li><strong>Através das células endoteliais</strong> (via transcelular), em casos menos frequentes.</li>
            </ul>
        </li>
        <li>
            <strong>Quimiotaxia</strong><br>
            Após atravessar o endotélio, os leucócitos migram em direção ao local da infecção ou inflamação, guiados por sinais químicos, como citocinas e quimiocinas.
        </li>
    </ol>
    <h3>Mecanismos Envolvidos</h3>
    <ul>
        <li><strong>Selecinas</strong>: Facilitam a rolagem dos leucócitos.</li>
        <li><strong>Integrinas</strong>: Promovem a adesão firme dos leucócitos ao endotélio.</li>
        <li><strong>Moléculas de adesão celular (CAMs)</strong>: Incluem ICAM-1, VCAM-1 e PECAM-1, fundamentais para a adesão e migração.</li>
        <li><strong>Metaloproteinases (MMPs)</strong>: Enzimas que ajudam na degradação da matriz extracelular durante a passagem dos leucócitos pela membrana basal.</li>
    </ul>
     <h2>Importância da Diapedese</h2>
       <p>A diapedese é crucial para a defesa do organismo. Sem esse processo, os leucócitos não conseguiriam chegar ao local onde são necessários, resultando em falhas na resposta imune e maior susceptibilidade a infecções e lesões.
       </p>
    <h3>Implicações Clínicas</h3>
    <ul>
        <li><strong>Inflamação Crônica</strong>: A diapedese excessiva pode levar a danos nos tecidos.</li>
        <li><strong>Deficiência na Diapedese</strong>: Pode resultar em condições como <strong>imunodeficiência</strong>, tornando o organismo mais vulnerável a infecções.</li>
        <li><strong>Aterosclerose</strong>: O recrutamento excessivo de leucócitos contribui para o desenvolvimento de placas ateroscleróticas.</li>
    </ul>
                
                
                 <iframe src="https://www.youtube.com/embed/F09qaP7eEWc" title="YouTube video player" allowfullscreen></iframe>
            `;
            break;
        case 3:
            content = `
                <h2>Endocitose</h2>
                 <p>A endocitose é um processo biológico pelo qual a célula engloba materiais do ambiente externo, incorporando-os em seu interior por meio de invaginações da membrana plasmática. Esse processo é essencial para a captação de nutrientes, remoção de partículas, e comunicação celular. Existem diferentes tipos de endocitose, que variam conforme o mecanismo envolvido e os materiais transportados:</p>
              <h3>Tipos de Endocitose</h3>
    <ol>
        <li>
            <strong>Fagocitose</strong>
            <ul>
                <li>Especializada na ingestão de partículas grandes, como microrganismos ou restos celulares.</li>
                <li>As células fagocíticas, como macrófagos e neutrófilos, formam pseudópodes que envolvem a partícula, formando um fagossomo, que é posteriormente digerido por lisossomos.</li>
            </ul>
        </li>
        <li>
            <strong>Pinocitose</strong>
            <ul>
                <li>Envolve a ingestão de líquidos e pequenas moléculas dissolvidas.</li>
                <li>É um processo contínuo e não específico, em que a célula forma pequenas vesículas contendo fluido extracelular.</li>
            </ul>
        </li>
        <li>
            <strong>Endocitose mediada por receptor</strong>
            <ul>
                <li>Processo altamente seletivo, onde moléculas específicas (ligantes) se ligam a receptores na superfície celular.</li>
                <li>Após a ligação, a membrana invagina, formando vesículas que transportam as moléculas ligadas.</li>
                <li>Exemplos incluem a captação de colesterol na forma de LDL e hormônios como insulina.</li>
            </ul>
        </li>
    </ol>
    <h3>Etapas do Processo</h3>
    <ol>
        <li><strong>Ligação</strong>: Moléculas específicas ou partículas se ligam à superfície celular.</li>
        <li><strong>Invaginação</strong>: A membrana plasmática forma uma depressão ao redor do material.</li>
        <li><strong>Formação da vesícula</strong>: A membrana se fecha, criando uma vesícula intracelular.</li>
        <li><strong>Fusão e digestão</strong>: As vesículas podem se fundir a lisossomos para degradação ou redistribuir o conteúdo na célula.</li>
    </ol>
    <h3>Importância da Endocitose</h3>
    <ul>
        <li>Permite a ingestão de nutrientes essenciais.</li>
        <li>Participa na remoção de resíduos e defesa contra patógenos.</li>
        <li>Regula processos como sinalização celular e homeostase.</li>
        <li>Atua no transporte de substâncias para regiões específicas dentro da célula (transcitosse).</li>
    </ul>
</div>
                
                
                <iframe src="https://www.youtube.com/embed/ZRFT2lWBJJg" title="YouTube video player" allowfullscreen></iframe>
            `;
            break;
    }

    detailedText.innerHTML = content;
    detailedText.style.display = 'block';
}

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

