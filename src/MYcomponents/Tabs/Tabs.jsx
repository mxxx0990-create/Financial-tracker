import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useSelector } from 'react-redux'

function Tab() {

    const items = useSelector(state => state.user.items) || [];
    const saleItem = items.filter(u => u.operation === 'sale')
    const buyItem = items.filter(u => u.operation === 'buy')

    return (

        <>

            <Tabs defaultValue='all' className='mt-10'>
                <TabsList>
                    <TabsTrigger value="all">Все</TabsTrigger>
                    <TabsTrigger value="buy">Покупка</TabsTrigger>
                    <TabsTrigger value="sale">Продажа</TabsTrigger>
                </TabsList>

                <TabsContent value="all">
                    <Card>
                        <CardHeader>
                            <CardTitle>Все</CardTitle>
                            <CardDescription>Все ваши действия</CardDescription>
                        </CardHeader>
                        <CardContent className="h-auto overflow-y-auto grid gap-4">

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
                <TabsContent value="buy">
                    <Card>
                        <CardHeader>
                            <CardTitle>Покупка</CardTitle>
                            <CardDescription>Вашы покупки</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6">
                            {buyItem.map((item, index) => (
                                <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm bg-card text-card-foreground flex flex-col gap-2">
                                    <div className='flex justify-between items-center'>
                                        <h4 className="font-semibold text-lg">{item.object}</h4>
                                        <p className="font-bold text-primary">${item.prise}</p>
                                    </div>
                                    <p className="text-sm font-medium px-2 py-1 rounded w-fit bg-red-100 text-red-700">
                                        Покупка
                                    </p>
                                </div>
                            ))}
                        </CardContent>

                    </Card>

                </TabsContent>

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



        </>

    )
}

export default Tab