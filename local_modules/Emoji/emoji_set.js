// Copyright (c) 2014-2017, MyMonero.com
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification, are
// permitted provided that the following conditions are met:
//
// 1. Redistributions of source code must retain the above copyright notice, this list of
//	conditions and the following disclaimer.
//
// 2. Redistributions in binary form must reproduce the above copyright notice, this list
//	of conditions and the following disclaimer in the documentation and/or other
//	materials provided with the distribution.
//
// 3. Neither the name of the copyright holder nor the names of its contributors may be
//	used to endorse or promote products derived from this software without specific
//	prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
// MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL
// THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF
// THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
"use strict"
//
// Load emojis
var fs = require('fs');
var emojiDescriptionsByKey = JSON.parse(fs.readFileSync(__dirname + '/Vendor/emoji_strategy.json'), 'utf8')
// Generate array
const emojiChars = []
const keys = Object.keys(emojiDescriptionsByKey)
const numberOf_keys = keys.length
for (let i = 0 ; i < numberOf_keys ; i++) {
	const key = keys[i]
	const emoji_description = emojiDescriptionsByKey[key]
	const shortname = emoji_description.shortname
	const unicode = emoji_description.unicode
	var thisEmojiStr = ""
	const codes = unicode.split("-")
	const numberOf_codes = codes.length
	for (let j = 0 ; j < numberOf_codes ; j++) {
		const code = codes[j]
       	// Handle invalid unicode char for C99
       	// http://c0x.coding-guidelines.com/6.4.3.html
			thisEmojiStr += String.fromCodePoint(parseInt(code, 16)) // what it takes to convert to unicode char
	}
	emojiChars.push(thisEmojiStr)
}
//
exports.Emojis = emojiChars