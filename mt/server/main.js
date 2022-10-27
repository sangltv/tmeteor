import {DB} from 'meteor/thaysang:mdb'

const db = new DB()

db.insert({text:"hello"}, "posts")