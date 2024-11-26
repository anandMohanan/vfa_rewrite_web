import { motion } from "framer-motion"
import { DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"

export const Waitlist = () => {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle className='transition-colors'>
                    Join the waitlist now
                </DialogTitle>
            </DialogHeader>
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
        </DialogContent>
    )
}


