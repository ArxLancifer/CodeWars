// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result 
//in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
    return toHexString(r) + toHexString(g) + toHexString(b)
}

function toHexString(colorVal) {
    if (colorVal > 255) return "FF"
    else if (colorVal < 0) return "00"

    else
        return colorVal.toString(16).padStart(2, "0").toUpperCase();

}