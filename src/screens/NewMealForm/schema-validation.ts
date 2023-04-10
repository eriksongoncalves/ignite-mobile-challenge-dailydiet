import { z } from 'zod'
import { MealStatus } from '../../@types/global'

export const schemaValidation = z.object({
  name: z.string({ required_error: '' }).nonempty('Insira o nome da refeição'),
  description: z
    .string({ required_error: '' })
    .nonempty('Insira uma descrição para a refeição'),
  date: z
    .string({ required_error: '' })
    .nonempty('Insira a data')
    .min(10, 'Data inválida')
    .max(10, 'Data inválida')
    .refine(value => /\d{2}\/\d{2}\/\d{4}/.test(value), 'Data inválida')
    .transform(value => {
      const [day, month, year] = value.split('/')

      return new Date(`${year}-${month}-${day}`)
    }),
  hour: z
    .string({ required_error: '' })
    .nonempty('Insira a hora')
    .min(5, 'Hora inválida')
    .max(5, 'Hora inválida')
    .refine(value => /\d{2}:\d{2}/.test(value), 'Hora inválida'),
  status: z
    .string({ required_error: '' })
    .nonempty('Selecione o status')
    .transform(value => value as MealStatus)
})

export type NewMealFormData = z.infer<typeof schemaValidation>
