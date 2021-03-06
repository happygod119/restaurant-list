const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./user");

const restaurantSchema = new Schema({
  //* 資料型別是字串 & 這是個必填欄位
  name: { type: String},
  name_en: { type: String},
  category: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  phone: { type: String, required: true },
  google_map: { type: String, required: true },
  rating: { type: Number, required: true },
  description: { type: String, required: true },
  userId: {
    // 加入關聯設定
    type: Schema.Types.ObjectId,
    ref: User,
    index: true,
    required: true,
  },
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
