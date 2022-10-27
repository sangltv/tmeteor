import {DB} from 'meteor/thaysang:mdb'

const db = new DB()

db.insert("post",{text:"greate"})