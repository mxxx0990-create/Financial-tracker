

import './Aside.css'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useSelector } from 'react-redux'

function Aside2() {
    const items = useSelector(state => state.user.items) || []
    const saleItem = items.filter(u => u.operation === 'sale')

    return (
        <div className='Div'>
            <Tabs defaultValue='sale' className='mt-10'>
                <TabsList>
                    <TabsTrigger value="sale">Продажа</TabsTrigger>
                </TabsList>

                <TabsContent value="sale">
                    <Card>
                        <CardHeader>
                            <CardTitle>Продажа</CardTitle>
                            <CardDescription>Ваша продажа</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            {saleItem.map((item, index) => (
                                <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm bg-card text-card-foreground flex flex-col gap-2">
                                    <div className='flex justify-between items-center'>
                                        <h4 className="font-semibold text-lg">{item.object}</h4>
                                        <p className="font-bold text-primary">${item.prise}</p>
                                    </div>
                                    <p className="text-sm font-medium px-2 py-1 rounded w-fit bg-green-100 text-green-700">
                                        Продажа
                                    </p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Aside2
