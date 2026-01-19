
import './Form.css'
import { useForm, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

import Tab from '../Tabs/Tabs'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import DialogDemo from '../Dialog/Dialog'
import { useDispatch } from 'react-redux'
import { buyItem, sellItem } from '../Theme/Users'

function Form() {
  const { register, handleSubmit, reset, control } = useForm()
  const dispatch = useDispatch()

  const onSubmit = (data) => {
    
    if (!data.object || !data.prise || !data.operation) {
      alert("Заполните все поля")
      return
    }

    
    const payload = {
      object: data.object,
      prise: Number(data.prise),
      operation: data.operation
    }

    
    if (data.operation === 'buy') {
      dispatch(buyItem(payload))
    } else if (data.operation === 'sale') {
      dispatch(sellItem(payload))
    }

    reset()
  }

  return (
    <div className='form'>
      
     
      <main className="main">
        <Card className="mt-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
              <Input
                className="mb-5"
                placeholder='Введите имя товара'
                type='text'
                {...register("object")}
              />
              <Input
                className="mb-5"
                placeholder='Цена товара'
                type='number'
                {...register("prise")}
              />
              <Controller
                name="operation"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder="Выберите операцию" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sale">Продажа</SelectItem>
                      <SelectItem value="buy">Покупка</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" className="mt-12">
                Добавить
              </Button>
            </CardFooter>
          </form>

          
          <div className="mt-4 text-center">
            <DialogDemo />
          </div>
        </Card>

        
        <Tab />
      </main>

      
     
    </div>
  )
}

export default Form
