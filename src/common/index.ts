export const testCases: [string, string][] = [
    [
        "cats AND*Dogs-are Awesome",
        "cats_and_dogs_are_awesome",
    ],
    [
        " a b c d-e_f%g  ",
        "a_b_c_d_e_f_g",
    ],
    [
        "hello  ** worLD@",
        "hello_world",
    ],
    [
        "3 CATS$and$5 DogS",
        "3_cats_and_5_dogs",
    ],
    [
        "hello",
        "hello",
    ],
]
