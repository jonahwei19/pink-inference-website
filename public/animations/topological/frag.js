module.exports.frag = `
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform float seed;

varying vec2 v_texcoord;

void main(void)
{
    vec2 uv = v_texcoord;
    
    float mouse_distance = distance(uv, u_mouse/u_resolution);
     
    float grain = mix(-0.01, 0.01, rand(uv * u_time));
    
    vec2 movement = vec2(1., 1.);
    movement *= rotation2d(1.);
    
    float f = fbm(uv + movement);
    
    f *= 50.0;
    f += u_time * 0.2;
    f += grain*3.0;
    f += pow(mouse_distance,0.10);
    f = fract(f);
    float mixer = step(0.8, f) - step(0.9, f);
    
    vec4 black = vec4(0., 0., 0., 0.);
    vec4 pink = vec4(254./255.,93./255.,168./255.,0.5);
    vec4 color = mix(black, pink, mixer);
    
    gl_FragColor = color;
}
`;
