import Book from "../Model/bookModel"


export const getBook = (req,res)=>{

    try {
        const book = Book.find();
        res.status()
    } catch (error) {
        
    }

}