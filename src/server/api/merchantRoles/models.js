import mongoose from "mongoose"

const merchantRolesSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  merchant_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "merchants"
  },
  resources: [
    {
      name: {
        type: String,
        require: true
      },
      action: [
        {
          name: {
            type: String,
            require: true
          },
          access_type: {
            type: String,
            require: true,
            default: "own"
          },
          fields: {
            allow: [String],
            deny: [String]
          }
        }
      ]
    }
  ]
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

merchantRolesSchema.set("toJSON", {
  transform (doc, ret, options) {
    delete ret.merchant_id
    return ret
  }
})

const MerchantRoles = mongoose.model("MerchantRoles", merchantRolesSchema, "merchant_roles")
export default MerchantRoles
