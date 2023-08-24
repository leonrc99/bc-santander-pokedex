const modalDetail = document.querySelector(".modal");
const closeModalButton = document.querySelector(".btn-close");

function setModalContent(pokeData) {
  const {
    id,
    name,
    weight,
    height,
    abilities,
    attack,
    defense,
    speed,
    image,
    type,
    description,
  } = pokeData;

  return `
          <div class="flex ${type}" <div>
  
          <div class="head-title">
            <h3>#${id} - ${name}</h3>
          </div>
  
          <div>
            <img class="poke-img" src="${image}" alt="${name}" />
          </div>
  
          <p class="poke-desc">${description}</p>
  
          <ol class="poke-details">
            <li>Height: ${height}</li>
            <li>Weight: ${weight}</li>
            <li>Attack: ${attack}</li>
            <li>Defense: ${defense}</li>
            <li>Speed: ${speed}</li>
            <li>Abilities: ${abilities.ability.name}</li>
          </ol>
  
          <button class="btn-close" onClick="closeModal()">Fechar</button>
        </div>
      `;
}

const openModal = function () {
  modalDetail.classList.remove("hidden");
};

const closeModal = function () {
  modalDetail.classList.add("hidden");
};

async function showModal(pokemonId) {
  const description = await pokeApi.getDescription(pokemonId);
  const modalData = await pokeApi
    .getSinglePokemon(pokemonId)
    .then((res) => setModalContent({ ...res, description: description }));
  modalDetail.innerHTML = modalData;
  openModal();
}
