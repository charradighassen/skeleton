import type { InferType } from 'yup';
import * as yup from "yup";


export const friendSchema = yup.object({
  name: yup.string().required().default('')
})

export const schema = yup.object({
  name: yup.string().required().default(''),
  lastName: yup.string().required().default(''),
  age: yup.number().required().min(18).default(0),
  birthday: yup.date().required().default(new Date()),
  email: yup.string().email().required().default(''),
  address: yup.object({
    street: yup.string().required().default(''),
    number: yup.number().min(1).required().default(0),
    complement: yup.string().notRequired().default(''),
    district: yup.string().required().default('')
  }),
  friends: yup.array().of(friendSchema).default([])
})

export interface IFriendSchema extends InferType<typeof friendSchema> { }

export interface ISchema extends InferType<typeof schema> { }
