// data.js
const data = {
  items: [
    {
      _id: "69056ede5cfa279afa6bcc99",
      word: "earth",
      imageUrl: "https://res.cloudinary.com/dmybwa6i7/image/upload/v1737383738/flip-match/Hello!/hhoyzizkhqfmflyy2dgf.png"
    },
    {
      _id: "69056ede5cfa279afa6bcc9a",
      word: "tool",
      imageUrl: "https://res.cloudinary.com/dmybwa6i7/image/upload/v1737383740/flip-match/Hello!/petnzjoh4js1r682a6ln.png"
    },
    {
      _id: "69056ede5cfa279afa6bcc9b",
      word: "planet",
      imageUrl: "https://res.cloudinary.com/dmybwa6i7/image/upload/v1737383740/flip-match/Hello!/bqhmr2n7xmlczyczsqtx.png"
    }
  ]
};

// Convert MongoDB-like object to pairs array
function convertToPairs(dataObj) {
  if (!dataObj || !dataObj.items) return [];
  return dataObj.items.map(item => ({
    id: item._id,
    picture: item.imageUrl,
    word: item.word
  }));
}

export const pairs = convertToPairs(data);



