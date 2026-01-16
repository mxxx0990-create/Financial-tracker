import './Aside.css'
import Tab from '../Tabs/Tabs'
import { Tabs } from '@/components/ui/tabs'
import { TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { useSelector, useDispatch } from 'react-redux'

function Aside() {

    const items = useSelector(state => state.user.items) || [];



    const buyItem = items.filter(u => u.operation === 'buy')
    


    return (
        <>

            <div className='Div'>

                <Tabs defaultValue='buy' className='mt-10'>
                    <TabsList>

                        <TabsTrigger value="buy">Покупка</TabsTrigger>

                    </TabsList>

                    <TabsContent value="buy">
                        <Card>
                            <CardHeader>
                                <CardTitle>Покупка</CardTitle>
                                <CardDescription>Вашы покупкы</CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-6">
                                {buyItem.map((item, index) => (
                                    <div key={index} className="mb-4 p-4 border rounded-lg shadow-sm bg-card text-card-foreground flex flex-col gap-2">
                                        <div className='flex justify-between items-center'>
                                            <h4 className="font-semibold text-lg">{item.object}</h4>
                                            <p className="font-bold text-primary"> ${item.prise}</p>
                                        </div>
                                        <p className={`text-sm font-medium px-2 py-1 rounded w-fit ${item.operation === 'sale' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                                            }`}>
                                            {item.operation === 'sale' ? 'Продажа' : 'Покупка'}
                                        </p>
                                    </div>
                                ))}


                            </CardContent>

                        </Card>
                    </TabsContent>
                </Tabs>



            </div>
        </>
    )
}

export default Aside