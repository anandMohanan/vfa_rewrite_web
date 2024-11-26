import { motion } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { cx } from "class-variance-authority"

function useMediaQuery(query: string) {
    const [value, setValue] = useState(false)

    useEffect(() => {
        function onChange(event: MediaQueryListEvent) {
            setValue(event.matches)
        }

        const result = matchMedia(query)
        result.addEventListener("change", onChange)
        setValue(result.matches)

        return () => result.removeEventListener("change", onChange)
    }, [query])

    return value
}

interface WaitlistProps {
    isNav?: boolean
}

export const Waitlist = (props: WaitlistProps) => {
    const [isMounted, setIsMounted] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)')

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null
    }


    if (isMobile) {
        return (
            <Drawer>
                <DrawerTrigger asChild>
                    <button className={cx('transition-colors flex items-center gap-2 group', props.isNav ? 'hover:bg-black hover:text-white px-4 py-1' : 'bg-black text-white px-8 py-3 hover:bg-red-500')}>
                        JOIN THE WAITLIST
                        {!props.isNav && <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        }
                    </button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle className='transition-colors'>Join the waitlist now</DrawerTitle>
                    </DrawerHeader>
                    <FormComponent />
                </DrawerContent>
            </Drawer>
        )

    } else {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    <button className={cx('transition-colors flex items-center gap-2 group', props.isNav ? 'hover:bg-black hover:text-white px-4 py-1' : 'bg-black text-white px-8 py-3 hover:bg-red-500')}>
                        JOIN THE WAITLIST
                        {!props.isNav && <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                        }
                    </button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='transition-colors'>Join the waitlist now</DialogTitle>
                    </DialogHeader>
                    <FormComponent />
                </DialogContent>
            </Dialog>
        )
    }
}

const FormComponent = () => {
    return (
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center"
            >
                <p className="text-neutral-600 mb-12">
                    Ready to transform your business with intelligent Agents? Contact us today.
                </p>

                <form className="space-y-6 text-left z-40">
                    <div className="grid md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Which API agent would you like to have?"
                        className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                        aria-label="Desired API agent"
                    />
                    <textarea
                        placeholder="Message"
                        rows={6}
                        className="w-full p-3 border border-neutral-300 focus:border-black outline-none transition-colors z-40"
                    />
                    <button className="bg-black text-white px-8 py-3 hover:bg-red-500 transition-colors w-full md:w-auto">
                        SUBMIT
                    </button>
                </form>
            </motion.div>
        </div>
    )
}


