import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useSelector } from 'react-redux'

function Tab() {
    // ОШИБКА БЫЛА ЗДЕСЬ: убедитесь, что вы получаете данные из стора
    // Мы берем массив items из стейта user
    const items = useSelector(state => state.user.items) || [];

    return (
        <Tabs defaultValue='all' className='mt-10'>
            <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
                <Card>
                    <CardHeader>
                        <CardTitle>Все</CardTitle>
                        <CardDescription>Все ваши действия</CardDescription>
                    </CardHeader>
                    <CardContent className="h-[500px] overflow-y-auto grid gap-4">
                        {/* Проверьте, чтобы здесь использовалось именно имя 'items', 
                           которое мы объявили выше через useSelector 
                        */}
                        {items.map((item, index) => (
                            <div key={index} className="p-4 border rounded-lg shadow-sm bg-card text-card-foreground flex flex-col gap-2">
                                <div className='flex justify-between items-center'>
                                    <h4 className="font-semibold text-lg">{item.object}</h4>
                                    <p className="font-bold text-primary"> ${item.prise}</p>
                                </div>
                                <p className={`text-sm font-medium px-2 py-1 rounded w-fit ${item.operation === 'sale' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                    {item.operation === 'sale' ? 'Продажа' : 'Покупка'}
                                </p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default Tab