import { lucia } from "lucia"
import kv from "./adapter.ts";
import db from "./db.ts";
const auth = lucia({
    adapter: kv(db),
    
})